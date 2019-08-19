import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../core/models/persona.model';
import { User } from '../../core/models/user.model';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona;

  constructor() { 
  }

  getInitials(name: string) {
    // generate initials from name
    if (name.length === 0) {
      return "?"
    }
    
    var initials = name.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase() || name.charAt(0);
  }

  ngOnInit() {
    this.persona.initials = this.getInitials(this.persona.name);
  }

}
