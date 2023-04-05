import React, {useState, useContext} from 'react';
import userContext from './utils/userContext';

const SmartMart = () => {
    const {user} = useContext(userContext);
    console.log(user);

    const [isVisible, setIsVisible] = useState("about");
    return (
        <React.Fragment>
        <div>
            <h1 className='p-2 m-2 text-2xl font-bold'>Welcome smart mart</h1>
        </div>
        <Section
         title="About Mart"
          description='"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."' 
          isVisible={isVisible == 'about'}
          setIsVisible = {()=> setIsVisible("about")}
          />
        <Section 
        title="Career"
         description='"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."' 
         isVisible={isVisible == 'career'}
         setIsVisible = {()=> setIsVisible("career")}
         />
        <Section 
        title="Mart Team" 
        description='"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."' 
        isVisible={isVisible == 'team'}
        setIsVisible = {()=> setIsVisible("team")}
        />
        </React.Fragment>
    );
}
export default SmartMart;

const Section = ({title, description, isVisible, setIsVisible}) => {
    //const [isVisible, setIsVisible] = useState(true);
    return (
    <div className='border border-red-900 m-3'>
        <h1 className='p-2 m-2 text-2xl font-bold'>{title}</h1>
        { isVisible?(<>
                <p className='p-2 m-2'>{description}</p>
                    </>):(<button className='p-1 m-2 rounded-md border border-red-700' onClick={() => {setIsVisible(true)}}>Show</button>
    )}
        </div>
    );
}

const About = () => {
    const [isVisible, setIsVisible] = useState({
        about:true,
        career:false,
        team: false
    });
    return (
    <div className='border border-red-900 m-3'>
        <h1 className='p-2 m-2 text-2xl font-bold'>About Mart</h1>

        { 
        isVisible?(<>
                <p className='p-2 m-2'>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
        <button className='p-1 m-2 rounded-md border border-red-700' onClick={() => {setIsVisible(false)}}>Hide</button>
        </>):(<button className='p-1 m-2 rounded-md border border-red-700' onClick={() => {setIsVisible(true)}}>Show</button>
    )}
        </div>
        );
}

const Career = () => {
    const [isVisible, setIsVisible] = useState(true)

    return (
        
        <div className='border border-red-900 m-3'>
        <h1 className='p-2 m-2 text-2xl font-bold'>Career in mart</h1>
        {isVisible?(<>
        <p className='p-2 m-2'>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
        <button className='p-1 m-2 rounded-md border border-red-700' onClick={() => {setIsVisible(false)}}>Hide</button>
        </>):(
            <button className='p-1 m-2 rounded-md border border-red-700' onClick={() => {setIsVisible(true)}}>Show</button>

        )}

        </div>);
}

const Team = () => {
    return (
        <div className='border border-red-900 m-3'>
        <h1 className='p-2 m-2 text-2xl font-bold'>Mart Team</h1>
        <p className='p-2 m-2'>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
        <button className='p-1 m-2 rounded-md border border-red-700' onClick={() => {alert("clicked")}}>Show</button>

        </div>);
}