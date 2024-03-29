import { useDisableBodyScroll } from './hooks/useDisableBodyScroll'

export const ConfirmationDialog = ({ open, onConfirm, onCancel, message }) => {
  useDisableBodyScroll(open)
  return (
    <div className='dialogBox fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog'>
      <div className='relative px-4 min-h-screen md:flex md:items-center md:justify-center'>
        <div className=' opacity-25 w-full h-full absolute z-10 inset-0'></div>
        <div className='bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0  z-50 mb-4 mx-4 md:relative shadow-lg'>
          <div className='px-5'>
            <div className='mt-4 md:mt-0 text-center md:text-left'>
              <p className='font-bold'>Warning!</p>
              <p className='text-sm text-gray-700 mt-1'>{message}</p>
            </div>
          </div>
          <div className='text-center md:text-right mt-4 md:flex md:justify-end'>
            <button
              id='confirm-delete-btn'
              className='block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2'
              onClick={onConfirm}
            >
              Delete
            </button>
            <button
              id='confirm-cancel-btn'
              className='block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1'
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
