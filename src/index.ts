require('module-alias/register');

type OtptData={ otp:string, secret:string }

class OtpTest {
  generate():OtptData {
    const secret = 'secret';
    const otp = 'code';
    return { otp, secret };
  }

  verify({ otp, secret }:OtptData) {
  }
}

export default OtpTest;
