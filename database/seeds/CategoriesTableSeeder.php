<?php

use Illuminate\Database\Seeder;

use App\Category;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categorias = [
        	'Games',
        	'Eletrodomésticos',
        	'Cama',
        	'Esportes',
        	'Infantil'
        ];

        foreach ($categorias as $categoria)
        {
	    	Category::create([
				'description' => $categoria
			]);
        }
    }
}
