import registerSuccessPage from '../pages/registration/registerSuccess.vue'
import ForgotPasswordPage from '../pages/registration/forgotPassword.vue'
import ForgotPasswordSuccess from '../pages/registration/forgotPasswordSuccess.vue'
import ConfirmationPage from '../pages/registration/Confirmation.vue'

export const RegistrationRoutes = [
  {
    path: '/registerSuccess/:username',
    name: 'registerSuccess',
    component: resolve => resolve(registerSuccessPage),
    meta: { requiresAuth: false }
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: resolve => resolve(ForgotPasswordPage),
    meta: { requiresAuth: false }
  },
  {
    path: '/forgotPasswordSuccess/:username',
    name: 'forgotPasswordSuccess',
    component: resolve => resolve(ForgotPasswordSuccess),
    meta: { requiresAuth: false }
  },
  {
    name: 'confirmation',
    path: '/confirmation',
    component: resolve => resolve(ConfirmationPage),
    meta: { requiresAuth: false }
  }
]
