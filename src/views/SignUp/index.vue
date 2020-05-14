<!-- TODO: populate signup page -->
<template>
  <div class="signup">
    <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container>
                <form>
                  <v-row justify="center" align="center">
                    <h1 class="my-5 display-1 black--text text-uppercase">Register</h1>
                  </v-row>
                  <v-text-field
                    name="username"
                    label="Username"
                    id="username"
                    v-model="user.username"
                    type="username"
                    outlined
                    required>
                  </v-text-field>
                  <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    v-model="user.password"
                    type="password"
                    outlined
                    required>
                  </v-text-field>
                  <v-text-field
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    v-model="user.confirmPassword"
                    :rules="comparePasswords"
                    type="password"
                    outlined
                    required>
                  </v-text-field>
                  <v-text-field
                    name="email"
                    label="E-mail address"
                    id="email"
                    :rules="emailRules"
                    v-model="user.email"
                    type="email"
                    outlined
                    required>
                  </v-text-field>
                  <v-row justify="center" align="center" >
                    <v-col cols="12" >
                      <v-btn
                        block
                        @click="signup"
                        class="offset-y primary--text"
                        type="submit"
                      >Sign up
                      </v-btn>
                    </v-col>
                  </v-row>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
export default {
  name: "SignUp",

	data() {
		return {
			error: "",
			user: {
				username: "",
				email: "",
				password: "",
				confirmPassword: ""
			},
			emailRules: [
				v =>
					!v ||
					/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
					"E-mail must be valid"
			],
		};
	},
	computed: {
		comparePasswords() {
			return this.user.password !== this.user.confirmPassword ? "Passwords do not match" : ""
    }
	}

};
</script>
<style scoped>
  h1{
    align: center
  }
</style>
