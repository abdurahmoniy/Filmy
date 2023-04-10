const Modal = ({ show, item, onClose }) => {
    if (!show) {
        return null;
    }
    function refreshPage() {
        window.location.reload(true);
    }
    return (
        <>
            <div className="border-2 border-mytext1 rounded-2xl">
                <div className="flex w-full text-mybg1 bg-mytext1 py-2 cursor-pointer rounded-t-xl"
                    onClick={refreshPage}>
                    <i className='fas fa-info px-4 py-1'></i>
                    <div className="mx-auto">Agar video o'zgarmayotgan bo'lsa sahifani yangilang yoki bu yerga bosing!</div>
                </div>
                <video controls autoplay
                    width='100%'
                    height='100%'
                    className="rounded-b-2xl"
                //  poster={item.image}
                >
                    <source src={item.url} />
                </video>
            </div>
            <div className="text-white fontpa text-[30px] my-2 mx-auto">
                {'Panjara ortida ' + item.short}
            </div>
            
        </>
    )
}
export default Modal;