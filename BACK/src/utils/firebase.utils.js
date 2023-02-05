const { initializeApp } = require("firebase/app");
const {
  ref,
  uploadBytes,
  getDownloadURL,
  getStorage,
  deleteObject,
} = require("firebase/storage");

const dotenv = require("dotenv");

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Storage service
const storage = getStorage(firebaseApp);

const uploadImg = async ({ img, id, folderName }) => {
  try {
    // Create firebase reference
    const [originalName, ext] = img.originalname.split("."); // -> [pug, jpg]

    const filename = `${
      process.env.NODE_ENV
    }/${folderName}/${id}/${originalName}-${Date.now()}.${ext}`;

    const imgRef = ref(storage, filename);

    // Upload image to Firebase
    const result = await uploadBytes(imgRef, img.buffer);

    return result.metadata.fullPath;
  } catch (error) {
    console.log(error);
  }
};

const deleteImg = async (imgUrl) => {
  try {
    const imgRef = ref(storage, imgUrl);

    await deleteObject(imgRef);
  } catch (error) {
    console.log(error);
  }
};

const getImgsFromArray = async (array) => {
  const arrayPromises = array.map(async (element) => {
    const imgRef = ref(storage, element.imgUrl);

    const imgUrl = await getDownloadURL(imgRef);

    element.imgUrl = imgUrl;
  });
  await Promise.all(arrayPromises);

  return array;
};

module.exports = { uploadImg, getImgsFromArray, deleteImg };
