import React from 'react';
import Link from 'next/link';


const FormLists = ({urlparameter, accountid, forms, offset, maxReturn, totalforms}) => {

    //API return URL is jumping to Design studio so this URL is coded manually
    const formurl = 'https://engage-sj.marketo.com/?munchkinId='+accountid+'#/classic/FO';
    const view10moreurl = '/view-forms?'+urlparameter+'&maxReturn='+maxReturn+'&offset='+(parseInt(offset)+parseInt(maxReturn));
    const view10previousurl = '/view-forms?'+urlparameter+'&maxReturn='+maxReturn+'&offset='+(parseInt(offset)-parseInt(maxReturn));

    return (
        <>
            <div className="col-md-12 services-details-information">
                <div><h5>
                {parseInt(offset) > 0 &&
                    <Link href={view10previousurl}>
                    <a> {"<<"} Previous {maxReturn} forms </a>
                    </Link>
                }
                You are viewing forms from {parseInt(offset)+1} to { (parseInt(offset)+parseInt(maxReturn))}. 
                {parseInt(maxReturn) <= totalforms &&
                    <Link href={view10moreurl}>
                    <a> Next {maxReturn} forms {">>"} </a>
                    </Link>
                }
                </h5></div>

                <ul className="list-group list-group-flush">
                    {forms.map((form) => {
                        return (
                            <li className="list-group-item" key={form.id}>
                                <a target="_blank" rel="noreferrer" href={formurl+form.id}>
                                    {form.id} - {form.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default FormLists;