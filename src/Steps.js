import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import { Code } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';


SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('css', css);

const code1 = 'return(\n    <div>\n        <h1> Blog </h1>\n        <h2> Homepage </h2>\n    </div>\n)';
const code2 = 'return(\n     <div>\n          Four = {2+2}\n      </div> \n);';
const code3 = 'return(\n    <div>\n        <button>Like</button>\n    </div>\n)';
const code4 = 'button{\n    width: 60px;\n    height: 30px;\n    border-radius: 4px;\n    font-weight: bold;\n}'
const code5 = 'const [likes, setLikes] = useState(0);\nconst handleClick = () => {\n    setLikes(likes+1)\n};\nreturn (\n    <div>\n        <div>Liked: {likes}time(s)</div>\n        <button onClick={handleClick}>Like</button>\n    </div>';
const code6 = 'return(\n    <div>\n        <iframe width="787" height="443" src="..." title="..." ...> </iframe>\n    </div>'

export const Steps = [
    {step: 'Step 1', 
    title: 'Headers',
    description: 
        <div> Try different headers: h1, h2 og h3
            <br />
            Mark! Content inside the return should be wrapped 
            inside a &lt;div&gt; content &lt;/div&gt;
            <div>
                <SyntaxHighlighter language="jsx" style={prism}>
                    {code1}
                </SyntaxHighlighter>
            </div>
        </div>,
    panel: 'panel1'
    },
    {step: 'Step 2', 
    title: 'Logic in jsx',
    description: 
        <div>Now try writing logic inside return<br />
        Mark! Logic must be wrapped inside &#123; 	&#125;
            <div>
                <SyntaxHighlighter language="jsx" style={prism}>
                    {code2}
                </SyntaxHighlighter>
                <div className="subtitle">Task:</div>
                Make a constant outside of the return&#40;&#41;, and display the object with logic 
            </div>
        </div>,  
    panel: 'panel2'  
    },
    {step: 'Step 3', 
    title: 'Button',
    description: 
        <div>Let's make a button<br />
            <div>
                <SyntaxHighlighter language="jsx" style={prism}>
                    {code3}
                </SyntaxHighlighter>
                <div className='subtitle'>Task:</div>
                Make a dislike button
            </div>
        </div>,
    panel: 'panel3'  
    },
    {step: 'Step 4', 
    title: 'css',
    description: 
        <div>Now navigate to index.css file<br />
            <div>
                <SyntaxHighlighter language="css" style={prism}>
                    {code4}
                </SyntaxHighlighter>
                <div className='subtitle'>Task:</div>
                Hover different for like and dislike button
            </div>
        </div>,
    panel: 'panel4'   
    },
    {step: 'Step 5', 
    title: 'useState',
    description: 
        <div>Lets make the button count likes<br />
            <div>
                <SyntaxHighlighter language="jsx" style={prism}>
                    {code5}
                </SyntaxHighlighter>
                <div className='subtitle'>Task:</div>
                Now do the same for dislike button
            </div>
        </div>,
    panel: 'panel5'  
    },
    {step: 'Step 6', 
    title: 'Adding a video',
    description: 
        <div>
            &#x2022; Go to youtube<br />
            &#x2022; Right click at a video<br />
            &#x2022; Select <Code className='icon'/> <b>copy embed code</b> <br />
            &#x2022; When you past it inside your return, it should look something like: <br />
            <div>
                <SyntaxHighlighter language="jsx" style={prism}>
                    {code6}
                </SyntaxHighlighter>
                <div className='subtitle'>Task:</div>
                <Checkbox size='small'/> Add a dislike icon  <br />
                <Checkbox size='small'/> Change to the Button from material ui <br />
                <Checkbox size='small'/> Choose a component from material ui, for example this Checkbox <br />    
            </div>
        </div>,
    panel: 'panel6'  
    }

]
