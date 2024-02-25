import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import style from './LayoutCardInfo.module.scss';
import "bootstrap-icons/font/bootstrap-icons.css";

interface CardInfoProps {
    breadcrumb?: string[]
    isSelect?: boolean
    title?: string
    select?: any
    informations?: any
    functionSearch?: boolean
    functionReload?: boolean
    functionEdit?: boolean
    functionAdd?: boolean
    onAddClick?: () => void
}

function LayoutCardInfo(props: CardInfoProps) {
    const { breadcrumb, isSelect, title, select, informations, functionSearch, functionReload, functionEdit, functionAdd, onAddClick } = props;
    return (
        <div className={style.card}>
            <header className={style.breadcrumb}>
                {breadcrumb?.map((bread, key) => {
                    return(
                        <Breadcrumb key={key} icon='bi bi-columns-gap' name={bread} route='/login' /> 
                    )
                })}
            </header>
            <div className={style.title}>
                <h1>{isSelect ? select : title}</h1>
                <div className={style.options}>
                    {functionSearch ? <i className="bi bi-search"></i> : ""}
                    {functionReload ? <i className="bi bi-arrow-clockwise"></i> : ""}
                    {functionEdit ? <i className='bi bi-pencil-square'></i> : ""}
                    {functionAdd ? <i onClick={onAddClick} className="bi bi-plus-circle"></i> : ""}
                </div>
                <span />
            </div>
            <main>
                <div className={style.info}>
                    {informations}
                </div>
            </main>
        </div>
    )
}

export { LayoutCardInfo }