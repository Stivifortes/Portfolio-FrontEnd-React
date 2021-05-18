import React from 'react'
import './styles.css'

export default function Form() {
    return (
        <div className='formContainer'>
            <form>
            <label htmlFor="project">Project</label>
            <input type="text" name="project" placeholder="Project name"/>
        
            <label htmlFor="description">Project Description</label>
            <input type="text" name="description" placeholder="Project Description"/>
        
            <label htmlFor="url">Repository Url</label>
            <input type="text" name="url" placeholder='Repository Url' />
            
            <label htmlFor="image">Featured Image</label>
            <input type="text" name="image" placeholder='Image Url' />
            <input type="submit" value="Create Project"/>
            </form>
      </div>
    )
}
