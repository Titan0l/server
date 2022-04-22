module.exports = {
  mongoURL: process.env.MONGO_URL || 'mongodb+srv://vital:spider45@cluster0.b3wzj.mongodb.net/test',
  port: process.env.PORT || 4200,
  jwt: process.env.JWT || 'qweqweqwesdawe',
  email: process.env.EMAIL,
  password: process.env.PASSWD,
}
