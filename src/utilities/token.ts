import jwt from 'jsonwebtoken';

const SECRECT = process.env.JWT_SECRET || 'TrybesmithProject';

const jwtConfig: object = {
  expiresIn: '50min',
  algorithm: 'HS256',
};

const createToken = (id : number) => {
  const token = jwt.sign({ data: { id } }, SECRECT, jwtConfig);
  return token;
};

export default createToken;