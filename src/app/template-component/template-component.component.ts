import { trigger, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-component',
  templateUrl: './template-component.component.html',
  styleUrls: ['./template-component.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class TemplateComponentComponent implements OnInit {

  modules = [
    {
      title: 'Gestion Administrative et Financière',
      description: 'Centralisation des données, rapports financiers, gestion documentaire.',
    },
    {
      title: 'Gestion des Membres',
      description: 'Base de données des membres, suivi des adhésions, gestion des catégories.',
    },
    {
      title: 'Planification et Suivi des Entraînements',
      description: "Calendriers d'entraînement, suivi des présences, analyse de la charge de travail.",
    },
    {
      title: 'Communication et Notifications',
      description: 'Plateforme de communication centralisée, notifications instantanées, feedback des membres.',
    },
    {
      title: 'Analyse des Performances et Statistiques',
      description: 'Tableaux de bord personnalisés, rapports statistiques, suivi des objectifs.',
    },
    {
      title: 'Gestion des Compétitions et des Calendriers',
      description: 'Organisation des matchs, gestion des tournois, historique des compétitions.',
    },
    {
      title: 'Gestion des Abonnements et Paiements',
      description: 'Paiements en ligne, rappels automatiques, historique des paiements.',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
