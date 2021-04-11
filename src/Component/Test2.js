
import logoTest from '../logo.svg';
import '../App.css'
import { useState, useEffect } from 'react';

const Test2 = () => {
    const [stateInput, setStateInput] = useState(null);

    const [categories, setCategories] = useState([]);
    const [categoriesFilter, setCategoriesFilter] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('https://api.publicapis.org/categories').then((res) => res.json());
            setCategories(result)
        }
        fetchData();
    }, [])

    useEffect(() => {
        const catFilter = categories.filter((item) => item.includes(stateInput));
        setCategoriesFilter(catFilter);
    }, [stateInput])

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '20%', padding: '10px' }}>
                <input type="text" placeholder={`filterText`} value={stateInput} onChange={(event) => { setStateInput(event.target.value) }} />
            </div>
            <div>
                {!stateInput ?
                    <table>
                        <tr>
                            <th>Categories</th>

                        </tr>
                        {
                            categories.map((item) => {
                                return (
                                    <tr>
                                        <td>{`${item}`}</td>
                                    </tr>
                                )
                            })

                        }
                    </table>

                    :
                    <table>
                        <tr>
                            <th>Categories</th>
                        </tr>
                        {
                            categoriesFilter.map((item) => {
                                return (
                                    <tr>
                                        <td>{`${item}`}</td>
                                    </tr>
                                )
                            })

                        }
                    </table>
                }
            </div>
        </div>
    );
}

export default Test2;
