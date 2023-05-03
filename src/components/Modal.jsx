import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

const Modal = ({ show, item }) => {
    if (!show) {
        return null;
    }
    function refreshPage() {
        window.location.reload(true);
    }
    let vidurl = item.url
    return (

        <>
            <div className="md:border-2 border-mytext1 md:rounded-t-2xl">
                <div className="flex w-full text-mybg1 bg-mytext1 py-2 cursor-pointer md:rounded-t-xl"
                    onClick={refreshPage}>
                    <i className='fas fa-info px-4 py-1'></i>
                    <div className="mx-auto">Agar video o'zgarmayotgan bo'lsa sahifani yangilang yoki bu yerga bosing!</div>
                </div>
                <video controls autoplay muted
                    width='100%'
                    height='100%'
                    className="md:rounded-b-2xl "
                >
                    <source src={vidurl} />
                </video> 
//                 <video autoPlay loop
//                     controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
//                     onCanPlayThrough={() => {

//                     }}>
//                     <source src={vidurl} type="video/webm" />
//                 </Video>
            </div>
            <div className="text-white fontpa text-[30px] my-2 mx-auto px-6 md:px-16">
                {item.title}
            </div>

        </>
    )
}
export default Modal;
