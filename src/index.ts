import { CommandClient } from 'detritus-client';
import token from "./token";

// Initialize client
const commandClient = new CommandClient(token, {
    prefix: "-",
 });