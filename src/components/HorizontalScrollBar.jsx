import BodyPart from "./BodyPart";

const HorizontalScrollBar = ({data, bodyParts, setBodyParts}) => {
  return (
    <section className="flex justify-center flex-wrap">
        {
            data.map((item) => (
                <div 
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    className="p"
                >
                    
                    <BodyPart 
                        item={item}
                        bodyParts={bodyParts}
                        setBodyParts={setBodyParts}
                    />
                </div>
            ))
        }
    </section>
  )
}

export default HorizontalScrollBar