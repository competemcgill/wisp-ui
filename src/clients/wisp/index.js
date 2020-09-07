import { userClient } from "./user";
import { problemsClient } from "./problems";
import { problemSetsClient } from "./problem-sets";
import { authClient } from "./auth";

/*
const options = {
    token: String,
}
*/
export const wispClient = options => {
  return {
    user: userClient(options),
    problems: problemsClient(options),
    problemSets: problemSetsClient(options),
    auth: authClient()
  };
};
