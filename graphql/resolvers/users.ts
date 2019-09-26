import bcrypt from 'bcryptjs';

import User from '../../models/users';

export default {
  Mutation: {
    createUser: async (
      root: any,
      { input }: { input: { email: string; password: string } }
    ) => {
      try {
        const emailExists = await User.findOne({ email: input.email });
        if (emailExists) {
          throw new Error('That email is already taken');
        }
        const password = await bcrypt.hash(input.password, 12);
        const user = new User({
          email: input.email,
          password
        });
        const createdUser = await user.save();
        return { ...createdUser, password: null };
      } catch (error) {
        throw error;
      }
    }
  }
};
