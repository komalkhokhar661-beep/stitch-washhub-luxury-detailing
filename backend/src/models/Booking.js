import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    referenceCode: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      maxlength: [25, 'Phone number cannot exceed 25 characters'],
    },
    carModel: {
      type: String,
      required: [true, 'Vehicle specification is required'],
      trim: true,
      maxlength: [120, 'Vehicle specification cannot exceed 120 characters'],
    },
    serviceTier: {
      type: String,
      required: [true, 'Preservation service tier is required'],
      enum: {
        values: [
          'premium-wash',
          'interior-deep',
          'car-detailing',
          'ceramic-coating',
          'paint-protection',
          'multi-stage-polishing',
          'essential-care-pkg',
          'premium-care-pkg',
          'luxury-detailing-pkg',
        ],
        message: '{VALUE} is not a valid service tier',
      },
    },
    preferredDate: {
      type: Date,
      required: [true, 'Preferred intake date is required'],
    },
    custodyShift: {
      type: String,
      enum: ['morning', 'evening', 'full-day'],
      default: 'morning',
    },
    specialRequirements: {
      type: String,
      trim: true,
      maxlength: [1000, 'Notes cannot exceed 1000 characters'],
      default: '',
    },
    status: {
      type: String,
      enum: ['provisionally_locked', 'confirmed', 'in_progress', 'completed', 'cancelled'],
      default: 'provisionally_locked',
    },
    studioLocation: {
      type: String,
      default: 'Samalkha Atelier, Panipat 132101',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
bookingSchema.index({ createdAt: -1 });
bookingSchema.index({ preferredDate: 1 });

export const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
