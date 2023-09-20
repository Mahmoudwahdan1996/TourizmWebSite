import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import CowIcon from '@/assets/icons/cow-icon'
import ArrowDown from '@/assets/icons/arrow-down'
import ResendIcon from '@/assets/icons/resend'
import OfferIcon from '@/assets/icons/offer'
import ArabicIcon from '@/assets/icons/arabicIcon'
import EnglishIcon from '@/assets/icons/englishIcon'
Vue.use(Vuetify)


export default new Vuetify({
  rtl: true,
  icons: {
    iconfont: 'mdi',
    values: {
      cowIcon: {
        component: CowIcon
      },
      arrowDown: {
        component: ArrowDown
      },
      resendIcon: {
        component: ResendIcon
      },
      offerIcon: {
        component: OfferIcon
      },
      arabicIcon: {
        component: ArabicIcon
      },
      englishIcon: {
        component: EnglishIcon
      }
    }
  }
})
