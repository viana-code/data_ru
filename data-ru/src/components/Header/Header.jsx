import './style.css';

export const Header = ({hora})=> {

    var msgHora;

    if(hora >= 4 && hora < 12) msgHora = "Bom dia!";
    else if(hora >= 12 && hora < 18) msgHora = "Boa tarde!";
    else msgHora = "Boa noite!";

    return(
        <header>
            <div className='row'>
                <div className='col'>
                    <h1 className='logoText'>DataRU</h1>
                </div>

                <div className='col d-flex justify-content-end'>
                    <h1 className='msgHora'><b>{msgHora}</b></h1>
                </div>
            </div>
        </header>
    );
}