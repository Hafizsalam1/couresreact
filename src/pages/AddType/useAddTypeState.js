import React from "react";
import {onChangeText} from "../../Util/function";

const useAddTypeState = () => {

    const [typeId, setTypeId] = React.useState("");
    const [typeName, setTypeName] = React.useState("");
    const [level, setLevel] = React.useState("");
    const [duration, setDuration] = React.useState("");
    const [isDisable, setDisable] = React.useState(true);

    const getter = {typeName, typeId, level, duration, isDisable};
    const setter = {
        typeName: onChangeText(setTypeName),
        typeId: onChangeText(setTypeId),
        level: onChangeText(setLevel),
        duration: onChangeText(setDuration)
    }
    
    React.useEffect(() => {
        if (typeId && typeName  && level && duration) {
            setDisable(false)
        } else setDisable(true)
    }, [typeName, duration, level, typeId])

    return {
        getter, setter
    }



}
export default useAddTypeState