<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Docente extends Model
{
    use HasFactory;

    protected $table = 'docentes';
    protected $primaryKey = 'ID_docente';

    protected $fillable = [
        'ID_usuario',
        'nombre_usuario'
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'ID_usuario', 'ID_usuario');
    }
    public function grupoEmpresas()
    {
        return $this->hasMany(Grupo_Empresa::class, 'ID_docente');
    }
}
