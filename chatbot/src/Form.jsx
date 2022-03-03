import "./styles/Form.css";

export default function Home() {
    return (
        <div className="form mx-auto">
            <div className="text-container flex flex-col mx-auto">
                <form className="justify-center">
                        <input className="font-bold rounded text-black border-2 border-blue-500" type="text" value="Some Text Here"/>
                </form>
            </div>

        </div>
    )
}