import { Schema, model } from "mongoose";

const teacherSchema = new Schema(
    {
	rfc:{
        type: String,
        required:true,
        trim: true,
        minlength:6,
        maxlength:300,
	},
	name:{
        type: String,
        required:true,
        trim: true,
        minlength:3,
        maxlength:300,
	},
    lastName:{
        type: String,
        required:true,
        trim: true,
        minlength:3,
        maxlength:300,
	},
    mothersLastName:{
        type: String,
        required:true,
        trim: true,
        minlength:3,
        maxlength:300,
	},
    birthDate:{
        type: Date,
        required:true,
        trim: true,
	},
    address:{
        type: String,
        required:true,
        trim: true,
        minlength:3,
        maxlength:300,
	},
    phoneNumber:{
        type: Number,
        required:true,
        trim: true,
        min:10,
	},
    profession:{
        type: String,
        required:true,
        trim: true,
        minlength:3,
        maxlength:300,
	},
    employeeNumb:{
        type: Number,
        required:true,
        trim: true,
	},
    opcion: {
        type: Boolean,
        default: false,
      },
},
{
    timestamps: true,
    versionKey: false,
  }
);
export default model("Teacher", teacherSchema);