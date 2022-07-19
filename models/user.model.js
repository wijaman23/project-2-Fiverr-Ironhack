const mongoose = require("mongoose")
const Schema = mongoose.Schema

const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const PASSWORD_PATTERN = /[A-Za-z\d$@$!%*?&]{8,15}/

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

userSchema.pre("validate", function (next) {
    this.img = this.img || undefined
    next()
})

userSchema.pre('save', function (next) {
    this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase()
    next();
});

const User = mongoose.model('User', userSchema)

module.exports = User;