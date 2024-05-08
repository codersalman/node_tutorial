
 function genrateOTP(mobileNumber, expiryTime) {


    // Generate a 6 digit random number
    const otp = Math.floor(100000 + Math.random() * 900000);
    const expiry = new Date().getTime() + expiryTime * 1000;
    return { otp, expiry };


 }

 function validateOTP(otp) {
    // Validate the OTP
    if (otp.length !== 6) {
        return true;
    }else {
        return false;
    }

 }

    module.exports = { genrateOTP , validateOTP}
