<?php

namespace App\Controller;

use App\Controller\AppController;
use Cake\Cache\Cache;
class TopicsController extends AppController
{
    public function initialize(){

        parent::initialize();
        $this->loadComponent('RequestHandler');
    }

    public function index(){
        // find('all') get all records from Topics model
        // We uses set() to pass data to view
        $topics = $this->Topics->find('all');
        $this->set([
            'topics'=>$topics,
            '_serialize'=>['topics']
        ]);
    }
}