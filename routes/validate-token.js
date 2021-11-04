import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) =>{
    const token = req.header('auth-token');
    if(!token) return res.status(401).json({
        error: "Aceso denegado!"
    });

    try {
        const verify = jwt.verify(token, process.env.SECRET);
        req.user = verify;
        next();
    } catch (error) {
        res.status(400).json({
            error: "Token invalido"
        });
    }
};


module.exports = verifyToken;