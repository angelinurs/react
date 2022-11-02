import {useState} from 'react'
import data from '../data/data.json'
import styles from '../css/Ex8.module.css'

function Ex8_table({subject}) {
    const [subjectNo, setSubjectNo] = useState( subject );
    const lang_list = data.language.filter( lang => lang.subject === subject );
    return (
        <table id='table' className={styles.table}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Level</th>
                    <th>Subject</th>
                </tr>

            </thead>
            <tbody>
                {/*                 
                {data.language.map( lang => (
                    <tr key={lang.id}>
                        <td>{lang.title}</td>
                        <td>{lang.level}</td>
                        <td>{lang.subject}</td>
                    </tr>                
                ) )} 
            */}
                { lang_list.map( lang => (
                    <tr key={lang.id}>
                        <td>{lang.title}</td>
                        <td>{lang.level}</td>
                        <td>{lang.subject}</td>
                    </tr>                
                ) )} 

            </tbody>

        </table>
    );
}

export default Ex8_table;