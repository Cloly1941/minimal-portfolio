// ** React hot toast
import {Toaster} from 'react-hot-toast';

const ToastCustom = () => {
    return (
        <Toaster
            position="top-center"
            toastOptions={{
                className:
                    '!max-w-none px-6 py-4 font-title',
                duration: 3000,

                success: {
                    className: '!max-w-none !text-sm font-title',
                    icon: '(=^･ｪ･^=)/',
                },

                error: {
                    className: '!max-w-none !text-sm !bg-red-400 !text-white font-title',
                    icon: '(=ＴェＴ=)',
                },
            }}
        />
    )
}

export default ToastCustom;