import * as Yup from 'yup';

export const UserScalarFieldEnumSchema = Yup.mixed().oneOf(["id","v","auth","createdAt","lastAccessed","name","password","phone","points","policyAccepted","preferredCommunicationMethod","updatedAt","username","email","whatsAppNumber","googleId","facebookId","verified"])