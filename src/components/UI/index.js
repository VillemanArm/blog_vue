import AppButton from "./AppButton.vue" // 2. импортируем общий компонент в общий js файл
import Modal from "./Modal.vue"
import AppSelect from "./AppSelect.vue"
import AppInput from "./AppInput.vue"
import AppLoader from './AppLoader.vue'

export default [AppButton, Modal, AppSelect, AppInput, AppLoader] // 3. собираем массив с компонентами
