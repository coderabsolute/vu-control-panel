import registerSuccessPage from '../pages/registration/registerSuccess.vue'
import ConfirmationPage from '../pages/registration/Confirmation.vue'

export const RegistrationRoutes = [
  {
    path: '/registerSuccess/:email',
    name: 'registerSuccess',
    component: resolve => resolve(registerSuccessPage),
    meta: { requiresAuth: false }
  },
  {
    name: 'confirmation',
    path: '/confirmation',
    component: resolve => resolve(ConfirmationPage),
    meta: { requiresAuth: false }
  }
]
