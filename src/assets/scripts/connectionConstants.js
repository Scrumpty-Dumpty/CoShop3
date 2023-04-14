// MongoDB Cluster username: CoShopUser
// MongoDB Cluster password: 6TvlGsCx9PGmwpNl

const uri = "mongodb+srv://CoShopUser:<password>@coshopcluster.iyjalfb.mongodb.net/?retryWrites=true&w=majority";
const db_name = "CoShopDatabase";
const collection_name = "CoShopUsersCollection";

module.exports = {uri, db_name, collection_name}; 

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://CoShopUser:6TvlGsCx9PGmwpNl@coshopcluster.iyjalfb.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a schema for the user collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);