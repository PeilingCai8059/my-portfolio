import "./TabButton.css"

export default function TabButton({name, isSelected, onSelect}){
    return (
        <button onClick={onSelect} className={isSelected ? 'active' :undefined}> {name} </button>
        
    )
}