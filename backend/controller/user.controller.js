import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User Already Exists. Please try Logging in." });
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createUser = new User({
            username: username,
            email: email,
            password: hashPassword
        })
        await createUser.save();
        res.status(201).json({
            message: "User create successful",
            user: {
                _id: createUser._id,
                username: createUser.username,
                email: createUser.email
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Username" });
        }
        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password" });
        }
        return res.status(200).json({
            message: "Login successful...",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
