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
        required: [true, 'Campo nombre requerido'],
        minLength: [2, 'Minimo 2 caracteres'],
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Campo apellido requerido'],
        minLength: [2, 'Minimo 2 caracteres'],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: [true, 'Email existente'],
        required: [true, 'Campo email requerido'],
        match: [EMAIL_PATTERN, 'Email invalido'],
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
            message: img => "Invalida URL"
        },
    },
    password: {
        type: String,
        required: [true, 'Requerida contraseña'],
        match: [PASSWORD_PATTERN, 'Invalida contraseña, min 8 y max 15 caracteres'],
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