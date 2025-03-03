class LicenseService {
  constructor() {
    this.activeLicenses = new Map();
  }

  async activateLicense(licenseData) {
    try {
      // For testing purposes, we'll accept any license key that's longer than 8 characters
      if (licenseData.licenseKey.length < 8) {
        return {
          success: false,
          message: "Invalid license key. Must be at least 8 characters.",
        };
      }

      // Simulate license validation
      const licenseInfo = {
        key: licenseData.licenseKey,
        username: licenseData.username,
        activationDate: new Date(),
        expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        status: "active",
      };

      // Store license info
      this.activeLicenses.set(licenseData.licenseKey, licenseInfo);

      return {
        success: true,
        message: "License activated successfully",
        data: {
          expiryDate: licenseInfo.expiryDate,
          username: licenseInfo.username,
        },
      };
    } catch (error) {
      return {
        success: false,
        message: `License activation failed: ${error.message}`,
      };
    }
  }

  validateLicense(licenseKey) {
    const license = this.activeLicenses.get(licenseKey);
    if (!license) {
      return false;
    }
    return license.expiryDate > new Date();
  }
}

module.exports = new LicenseService();
