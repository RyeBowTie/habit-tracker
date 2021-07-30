
const { User, Habit, Mood } = require('../models');

// import authentication utility and error
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, {_id}) => {

            console.log("Logging...")

            console.log(_id)

            const userData = await User.findOne( {_id:_id} ).populate('habits');
            
            return userData;
    
        }

        // me: async (parent, args, context) => {

        //     if (context.user) {
        //         const userData = await User.findOne({ _id: context.user._id })
        //         .select('-__v -password')
        //         return userData;
        //     }

        //     throw new AuthenticationError('Not logged in');
        // }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne( { email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, {username,email,password}) => {
            const user = await User.create({username,email,password});
            const token = signToken(user)
            return { token, user };
        },

        addHabit: async (parent, { name,rating,id}) => {
            const habit= await Habit.create({name,rating});
            if (id) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id:id },
                    { $addToSet: {habits: habit} },
                    { new: true }
                )
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!')

        }
        
    }
}
module.exports = resolvers;