<template>
    <div>

        <div class="container">

            <h1>login & registration forms</h1>
            <p>
                <nuxt-link to="Forms" class="caret-right">Click here to view basic form elements</nuxt-link>
            </p>

            <v-spacer :size="[2,3,4]"></v-spacer>

            <h3 class="margin-bottom-2">Login</h3>
            <form class="login-form">
                <label>Email Address*
                    <input class="medium-input" type="email" id="signin-email" required>
                </label>
                <div class="password-field">
                    <div class="toggle-password" tabindex="0" aria-label="toggle password visibility"></div>
                    <label>Password*
                        <input name="password" type="password">
                    </label>
                </div>
                <button class="button purple margin-vertical-1" type="submit">Continue</button>
                <p class="margin-bottom-2"><a href="#">Forgot your password?</a></p>
            </form>

            <v-spacer :size="[2,3,4]"></v-spacer>

            <h3 class="margin-bottom-2">Registration</h3>

            <form class="registration-form">
                <div class="grid-x grid-margin-x">
                    <div class="cell small-12 medium-6">
                        <label>First Name*
                            <input type="text" id="firstName" required>
                        </label>
                    </div>
                    <div class="cell small-12 medium-6">
                        <label>Last Name*
                            <input type="text" id="lastName" required>
                        </label>
                    </div>
                </div>
                <label>Email*
                    <input type="email" id="email" required>
                </label>
                <div class="grid-x grid-margin-x">
                    <div class="cell small-12 medium-6">
                        <div class="password-field">
                            <div class="toggle-password" tabindex="0" aria-label="toggle password visibility"></div>
                            <label>Password*
                                <input id="password" name="password" type="password" pattern="^\S{6,}$"
                                       onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Must have at least 6 characters' : ''); if(this.checkValidity()) form.password_two.pattern = this.value;"
                                       required>
                            </label>
                        </div>
                    </div>
                    <div class="cell small-12 medium-6">
                        <div class="password-field">
                            <div class="toggle-password" tabindex="0" aria-label="toggle password visibility"></div>
                            <label>Confirm Password*
                                <input id="password_two" name="password_two" type="password" pattern="^\S{6,}$"
                                       onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Passwords do not match' : '');"
                                       required>
                            </label>
                        </div>
                    </div>
                </div>
                <button class="button purple margin-vertical-1" type="submit">continue</button>
            </form>

            <v-spacer :size="[2,3,4]"></v-spacer>

        </div>

    </div>
</template>
