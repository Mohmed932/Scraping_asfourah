import * as dotenv from "dotenv";
dotenv.config();

import { PostToFacebookPage } from "./Facebook.js";
import { publishPostOnThreads } from "./Threads.js";
import { publishPostOnInstagram } from "./Instagram.js";

const FACEBOOK_ACCESSTOKEN = process.env.FACEBOOK_ACCESSTOKEN;
const THREADS_ACCESSTOKEN = process.env.THREADS_ACCESSTOKEN;
const FACEBOOKPAGEID = process.env.FACEBOOKPAGEID;
const INSTAGRAM_ID = process.env.INSTAGRAM_ID;
const THREADS_ID = process.env.THREADS_ID;

export const PublishToSocialMedia = async (message, image, linkNews) => {
  try {
    await PostToFacebookPage(
      FACEBOOK_ACCESSTOKEN,
      FACEBOOKPAGEID,
      message,
      image,
      linkNews
    );
    await publishPostOnInstagram(
      FACEBOOK_ACCESSTOKEN,
      INSTAGRAM_ID,
      message,
      image,
      linkNews
    );
    await publishPostOnThreads(
      THREADS_ACCESSTOKEN,
      THREADS_ID,
      message,
      image,
      linkNews
    );
  } catch (error) {
    console.log(error);
  }
};
