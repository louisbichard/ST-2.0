
interface LogConfig {
  logs: boolean;
}

class Log {
    
    config: {}: LogConfig
    
    constructor(){
        this.config = {
            logs: true
        }
    }

    set(development_tool: string) {
        this.config[development_tool] = development_tool;
    }

    output(string: string) {
        console.log(this, this.config)
        console.log(string); 
    }

}


export let log = new Log().output;