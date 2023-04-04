//mengimpor library gRPC untuk Node.js.
const grpc = require('@grpc/grpc-js');
//mengimpor library protoLoader untuk membaca file proto.
const protoLoader = require('@grpc/proto-loader');

//menentukan path dari file .proto.
const PROTO_PATH = './user.proto';

//membaca file .proto dan mengembalikan definisi package dari proto tersebut dalam bentuk JavaScript.
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {keepCase: true,
   longs: String,
   enums: String,
   defaults: true,
   oneofs: true
  });

//mengambil definisi package dan mengembalikan objek gRPC.
const grpcObject = grpc.loadPackageDefinition(packageDefinition);
//mengambil definisi service yang telah didefinisikan pada file .proto.
const userService = grpcObject.UserService;

//membuat koneksi ke server dengan membuat instance client dari objek service yang didefinisikan pada userService.
const client = new userService('localhost:50051', grpc.credentials.createInsecure());

// // Get user by ID
// const userId = 'Az0cJt33nkWWEAUi5X0r';
// client.GetUser({id: userId}, function(err, response) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(response.user);
//   }
// });

// // Create new user
// const newUser = {
//   name: 'vira',
//   email: 'vira@example.com'
// };
// client.CreateUser(newUser, function(err, response) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(response.user);
//   }
// });

 

// Update existing user
const existingUser = {
  id: 'C6iIUK4cgP9f9yPlEUCU',
  name: 'salma',
  email: 'salma@example.com'
};
client.UpdateUser(existingUser, function(err, response) {
  if (err) {
    console.error(err);
  } else {
    console.log(response.user);
  }
});

// // Delete user by ID
// client.DeleteUser({id: userId}, function(err, response) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('User deleted');
//   }
// });
