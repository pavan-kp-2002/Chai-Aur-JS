function generateOTP(digits){
    let randomOTP = Math.floor(Math.random() * Math.pow(10, digits))
    let generatedOTPString = new String(randomOTP).padStart(digits, 0)
    return generatedOTPString
}

console.log(generateOTP(6))