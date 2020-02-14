<?php
    namespace App\Controller;

    use App\Controller\AppController;

    class FavoriteMoviesController extends AppController
    {
        public function initialize(){
            parent::initialize();
            $this->loadComponent('RequestHandler');
        }

        public function index(){
            $this->autoLayout = false;
            $data = $this->FavoriteMovies->find('all');
            $this->set([
                'data'=>$data,
                '_serialize'=>['data']
            ]);
            // $this->set('data',$data);
            // if($this->request->isPost()){
            //     $form = $this->request->data['Form'];
            //     $this->set('form',$form);
            // }
        }

    }