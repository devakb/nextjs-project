import { NextRequest, NextResponse } from "next/server";
import validator from 'validator';

export async function POST (request: NextRequest){

  let {email, password} = await request.json();

  let validationErrors = {};
  
  if(!email || !validator.isEmail(email)){
    validationErrors["email"] = "Please provide an valid email address.";
  }

  if(!password){
    validationErrors["password"] = "Password field must be required.";
  }


  let loginToken = "3293ac630c13f0245f92bbb1766e1616";

  if(Object.keys(validationErrors).length > 0){

    return NextResponse.json({
      success: false,
      errors: validationErrors,
    },{
      status: 422,
    });

  }else{

    return NextResponse.json({
      success: true,
      message: "You have successfully Signed Up",
      loginToken,
    });

  }

}



