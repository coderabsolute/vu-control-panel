import RegistrationPage from '../pages/registration/Registration.vue'
import RegistrationSuccessfulPage from '../pages/registration/RegistrationSuccessful.vue'
import ConfirmationPage from '../pages/registration/Confirmation.vue'

export const RegistrationRoutes = [
  { path: '/registration', component: resolve => resolve(RegistrationPage), meta: { requiresAuth: false } },
  {
    path: '/registrationSuccessful/:email',
    name: 'registrationSuccessful',
    component: resolve => resolve(RegistrationSuccessfulPage),
    meta: { requiresAuth: false }
  },
  { path: '/confirmation', component: resolve => resolve(ConfirmationPage), meta: { requiresAuth: false } }
]
