const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcryptjs")

const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const PASSWORD_PATTERN = /[A-Za-z\d$@$!%*?&]{8,15}/
const WORK_FACTOR = 10

const userSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: [true, 'Required name'],
        minLength: [2, 'Min 2 characters'],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: [true, 'Email already exists'],
        required: [true, 'Email address is required'],
        match: [EMAIL_PATTERN, 'Invalid Email'],
    },
    img:{
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        validate: {
            validator: function(img) {
                try {
                    new URL(img)
                    return true
                } catch (error) {
                    return false
                }
            },
            message: img => "invalid URL"
        },
    },
    password: {
        type: String,
        required: [true, 'Required password'],
        match: [PASSWORD_PATTERN, 'Invalid password'],
    },
})

userSchema.virtual('products', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'maker'
})

userSchema.pre("validate", function (next) {
    this.img = this.img || undefined
    next()
})

//Solo seria por si acaso actualiza la contraseña o gurdas algo que lleva la contraseña
userSchema.pre("save", function (next) {
    if (this.isModified("password")) { //Saber si viene el chorizo grande (haseada) o solo la contraseña que ha introducido el usuario 
        bcrypt
            .hash(this.password, WORK_FACTOR)
            .then(hash => {
                this.password = hash
                next()
            })
            .catch(error => next(error))
    } else {
        next()
    }
})

userSchema.pre('save', function (next) {
    this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase()
    next();
});

userSchema.methods.checkPassword = function (passwordToCheck) {
    return bcrypt.compare(passwordToCheck, this.password);
}

const User = mongoose.model('User', userSchema)

module.exports = User;