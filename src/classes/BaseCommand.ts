import { Command } from "detritus-client";
import { Context, ParsedArgs, ParsedErrors } from "detritus-client/lib/command";


// Use this to have just one class handle all the type errors
export declare class BaseCommand extends Command.Command {
  
    triggerTypingAfter = 1000;

  onTypeError(context: Context, args: ParsedArgs, errors: ParsedErrors) {
    
    const description = ['ERRORS'];
    for (let key in errors) {
      description.push(`**${key}**: ${errors[key].message}`);
    }
    return context.editOrReply(description.join('\n'));
  }
}
